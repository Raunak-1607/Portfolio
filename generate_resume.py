import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

def add_hyperlink(paragraph, text, url, color="0055AA", underline=False, font_size=10.5):
    """Adds a clean standard hyperlink without underlines for full ATS compatibility.
       In Word, hovering over it shows 'Ctrl + Click to follow link'.
    """
    part = paragraph.part
    r_id = part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)

    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('r:id'), r_id)

    new_run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')

    if color:
        c = OxmlElement('w:color')
        c.set(qn('w:val'), color)
        rPr.append(c)

    if underline:
        u = OxmlElement('w:u')
        u.set(qn('w:val'), 'single')
        rPr.append(u)

    rFont = OxmlElement('w:rFonts')
    rFont.set(qn('w:ascii'), 'Calibri')
    rFont.set(qn('w:hAnsi'), 'Calibri')
    rPr.append(rFont)

    sz = OxmlElement('w:sz')
    sz.set(qn('w:val'), str(int(font_size * 2)))
    rPr.append(sz)

    new_run.append(rPr)
    new_run.text = text
    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)

def create_resume():
    doc = Document()

    # 1. Page Setup - Letter size with 0.40 in top/bottom and 0.48 in left/right margins to guarantee strict 1-page fit
    for section in doc.sections:
        section.top_margin = Inches(0.38)
        section.bottom_margin = Inches(0.38)
        section.left_margin = Inches(0.48)
        section.right_margin = Inches(0.48)
        section.page_width = Inches(8.5)
        section.page_height = Inches(11.0)

    def set_spacing(p, before=0, after=2.0, line=1.10):
        p.paragraph_format.space_before = Pt(before)
        p.paragraph_format.space_after = Pt(after)
        p.paragraph_format.line_spacing = line

    def add_section_heading(title):
        p = doc.add_paragraph()
        set_spacing(p, before=6.5, after=2.5, line=1.0)
        run = p.add_run(title)
        run.font.name = 'Calibri'
        run.font.size = Pt(11.5)
        run.font.bold = True
        run.font.italic = False
        run.font.underline = False
        run.font.color.rgb = RGBColor(0, 0, 0)
        
        # Bottom border line
        pPr = p._p.get_or_add_pPr()
        pbdr = OxmlElement('w:pBdr')
        bottom = OxmlElement('w:bottom')
        bottom.set(qn('w:val'), 'single')
        bottom.set(qn('w:sz'), '6')
        bottom.set(qn('w:space'), '1')
        bottom.set(qn('w:color'), '222222')
        pbdr.append(bottom)
        pPr.append(pbdr)
        return p

    # ------------------ HEADER ------------------
    # Name (22 pt Bold)
    p_name = doc.add_paragraph()
    set_spacing(p_name, before=0, after=1, line=1.0)
    p_name.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_name = p_name.add_run("Raunak Biswas")
    r_name.font.name = 'Calibri'
    r_name.font.size = Pt(21)
    r_name.font.bold = True
    r_name.font.italic = False
    r_name.font.underline = False
    r_name.font.color.rgb = RGBColor(0, 0, 0)

    # Title (12 pt Bold)
    p_title = doc.add_paragraph()
    set_spacing(p_title, before=0, after=2.5, line=1.0)
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_title = p_title.add_run("MERN Stack Developer")
    r_title.font.name = 'Calibri'
    r_title.font.size = Pt(12)
    r_title.font.bold = True
    r_title.font.italic = False
    r_title.font.underline = False
    r_title.font.color.rgb = RGBColor(30, 30, 30)

    # Contact Line 1: Email | Phone (10 pt)
    p_c1 = doc.add_paragraph()
    set_spacing(p_c1, before=0, after=1.5, line=1.05)
    p_c1.alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    r1 = p_c1.add_run("Email: ")
    r1.font.bold = True
    r1.font.size = Pt(10)
    r1.font.name = 'Calibri'
    r1.font.italic = False
    
    r2 = p_c1.add_run("raunakbiswas302@gmail.com")
    r2.font.size = Pt(10)
    r2.font.name = 'Calibri'
    r2.font.italic = False
    r2.font.underline = False
    
    r3 = p_c1.add_run(" | Phone: ")
    r3.font.bold = True
    r3.font.size = Pt(10)
    r3.font.name = 'Calibri'
    r3.font.italic = False
    
    r4 = p_c1.add_run("+880 1723971414")
    r4.font.size = Pt(10)
    r4.font.name = 'Calibri'
    r4.font.italic = False

    # Contact Line 2: Address | GitHub (10 pt)
    p_c2 = doc.add_paragraph()
    set_spacing(p_c2, before=0, after=1.5, line=1.05)
    p_c2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    
    r5 = p_c2.add_run("Address: ")
    r5.font.bold = True
    r5.font.size = Pt(10)
    r5.font.name = 'Calibri'
    r5.font.italic = False
    
    r6 = p_c2.add_run("Bashundhara R/A , Dhaka-1229, Bangladesh")
    r6.font.size = Pt(10)
    r6.font.name = 'Calibri'
    r6.font.italic = False
    
    r7 = p_c2.add_run(" | GitHub: ")
    r7.font.bold = True
    r7.font.size = Pt(10)
    r7.font.name = 'Calibri'
    r7.font.italic = False
    
    add_hyperlink(p_c2, "https://github.com/Raunak-1607", "https://github.com/Raunak-1607", color="0055AA", underline=False, font_size=10.0)

    # Contact Line 3: Portfolio | LinkedIn (10 pt)
    p_c3 = doc.add_paragraph()
    set_spacing(p_c3, before=0, after=3.0, line=1.05)
    p_c3.alignment = WD_ALIGN_PARAGRAPH.CENTER

    r_port_lbl = p_c3.add_run("Portfolio: ")
    r_port_lbl.font.bold = True
    r_port_lbl.font.size = Pt(10)
    r_port_lbl.font.name = 'Calibri'
    r_port_lbl.font.italic = False

    add_hyperlink(p_c3, "https://my-portfolio-mh11ehgfm-raunak-ef96.vercel.app/", "https://my-portfolio-mh11ehgfm-raunak-ef96.vercel.app/", color="0055AA", underline=False, font_size=10.0)

    r_sep_c3 = p_c3.add_run(" | ")
    r_sep_c3.font.size = Pt(10)
    r_sep_c3.font.name = 'Calibri'

    r9 = p_c3.add_run("LinkedIn: ")
    r9.font.bold = True
    r9.font.size = Pt(10)
    r9.font.name = 'Calibri'
    r9.font.italic = False
    
    add_hyperlink(p_c3, "https://www.linkedin.com/in/raunak-biswas1/", "https://www.linkedin.com/in/raunak-biswas1/", color="0055AA", underline=False, font_size=10.0)

    # ------------------ CAREER OBJECTIVE ------------------
    add_section_heading("CAREER OBJECTIVE")
    p_obj = doc.add_paragraph()
    set_spacing(p_obj, before=1, after=3.0, line=1.12)
    p_obj.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    r_obj = p_obj.add_run(
        "Focused MERN Stack Developer and CSE undergraduate at AIUB with hands-on experience in building scalable, user-friendly full-stack web applications. Skilled in modern frontend architectures, REST API integration, JWT authentication systems, and responsive design. Strong analytical and problem-solving abilities demonstrated through end-to-end full-stack software development."
    )
    r_obj.font.name = 'Calibri'
    r_obj.font.size = Pt(10)
    r_obj.font.italic = False
    r_obj.font.underline = False
    r_obj.font.color.rgb = RGBColor(20, 20, 20)

    # ------------------ SKILLS ------------------
    add_section_heading("SKILLS")
    
    skill_rows = [
        ("Programming Languages: ", "JavaScript, TypeScript, Python, Java, C, C++"),
        ("Frameworks: ", "React.js, Next.js, Express.js, Node.js, Tailwind CSS, HeroUI, daisyUI"),
        ("Database Technologies: ", "MongoDB, MySQL, Oracle, PostgreSQL, Redis"),
        ("Tools & Technologies: ", "Git, GitHub, VS Code, Figma, Notion, Postman, npm"),
        ("AI Tools: ", "Claude code, github Copilot, CodeX, Gemini"),
        ("Deployment: ", "Vercel, Netlify, Firebase"),
        ("Soft Skill: ", "Leadership, Networking, Team work, Problem Solving")
    ]
    
    for label, items in skill_rows:
        p_sk = doc.add_paragraph()
        set_spacing(p_sk, before=0, after=1.5, line=1.08)
        
        r_lbl = p_sk.add_run(label)
        r_lbl.font.name = 'Calibri'
        r_lbl.font.size = Pt(10)
        r_lbl.font.bold = True
        r_lbl.font.italic = False
        r_lbl.font.underline = False
        r_lbl.font.color.rgb = RGBColor(0, 0, 0)
        
        r_val = p_sk.add_run(items)
        r_val.font.name = 'Calibri'
        r_val.font.size = Pt(10)
        r_val.font.italic = False
        r_val.font.underline = False
        r_val.font.color.rgb = RGBColor(30, 30, 30)

    # ------------------ PROJECTS ------------------
    add_section_heading("PROJECTS")

    # Project 1: BookNook (with Client GitHub & Server GitHub links)
    p_p1_title = doc.add_paragraph()
    set_spacing(p_p1_title, before=2.5, after=1, line=1.08)
    r_p1_num = p_p1_title.add_run("1. BookNook – Real-Time Library & Book Management Platform: ")
    r_p1_num.font.name = 'Calibri'
    r_p1_num.font.size = Pt(10.5)
    r_p1_num.font.bold = True
    r_p1_num.font.italic = False
    
    add_hyperlink(p_p1_title, "Live Link", "https://book-nook-green-three.vercel.app/", color="0055AA", underline=False, font_size=10.0)
    
    r_sep1 = p_p1_title.add_run(" | ")
    r_sep1.font.size = Pt(10.0)
    
    add_hyperlink(p_p1_title, "Client GitHub", "https://github.com/Raunak-1607/BookNook.git", color="0055AA", underline=False, font_size=10.0)
    
    r_sep1_b = p_p1_title.add_run(" | ")
    r_sep1_b.font.size = Pt(10.0)
    
    add_hyperlink(p_p1_title, "Server GitHub", "https://github.com/Raunak-1607/BookNook_Server.git", color="0055AA", underline=False, font_size=10.0)

    p_p1_role = doc.add_paragraph()
    set_spacing(p_p1_role, before=0, after=1.0, line=1.05)
    r_role1 = p_p1_role.add_run("Role: Full-Stack Developer")
    r_role1.font.name = 'Calibri'
    r_role1.font.size = Pt(10)
    r_role1.font.bold = True
    r_role1.font.italic = False

    b1_items = [
        "Architected a full-stack book library management system supporting 100+ book listings with instant search and filtering.",
        "Engineered real-time inventory tracking ensuring available copies dynamically update upon book borrowing and return.",
        "Secured 10+ REST API endpoints using JWT verification via JOSE and JWKS authentication, ensuring robust data privacy."
    ]
    for b in b1_items:
        p_b = doc.add_paragraph(style='List Bullet')
        set_spacing(p_b, before=0, after=1.2, line=1.08)
        r_b = p_b.add_run(b)
        r_b.font.name = 'Calibri'
        r_b.font.size = Pt(10.5)  # Exactly 10.5 pt as requested by user
        r_b.font.italic = False
        r_b.font.underline = False
        r_b.font.color.rgb = RGBColor(25, 25, 25)

    p_p1_tech = doc.add_paragraph()
    set_spacing(p_p1_tech, before=0.5, after=3.0, line=1.08)
    r_t1_lbl = p_p1_tech.add_run("Tech Stack: ")
    r_t1_lbl.font.name = 'Calibri'
    r_t1_lbl.font.size = Pt(10)
    r_t1_lbl.font.bold = True
    r_t1_lbl.font.italic = False
    r_t1_val = p_p1_tech.add_run("Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Better Auth, JWT")
    r_t1_val.font.name = 'Calibri'
    r_t1_val.font.size = Pt(10)
    r_t1_val.font.italic = False

    # Project 2: Bazar-Dor
    p_p2_title = doc.add_paragraph()
    set_spacing(p_p2_title, before=2.5, after=1, line=1.08)
    r_p2_num = p_p2_title.add_run("2. Bazar-Dor (বাজার দর) – Real-Time Commodity Price Tracker: ")
    r_p2_num.font.name = 'Calibri'
    r_p2_num.font.size = Pt(10.5)
    r_p2_num.font.bold = True
    r_p2_num.font.italic = False
    
    add_hyperlink(p_p2_title, "Live Link", "https://bazar-dor-alpha.vercel.app/", color="0055AA", underline=False, font_size=10.0)
    r_sep2 = p_p2_title.add_run(" | ")
    r_sep2.font.size = Pt(10.0)
    add_hyperlink(p_p2_title, "GitHub", "https://github.com/Raunak-1607/Bazar-Dor.git", color="0055AA", underline=False, font_size=10.0)

    p_p2_role = doc.add_paragraph()
    set_spacing(p_p2_role, before=0, after=1.0, line=1.05)
    r_role2 = p_p2_role.add_run("Role: Full-Stack Developer")
    r_role2.font.name = 'Calibri'
    r_role2.font.size = Pt(10)
    r_role2.font.bold = True
    r_role2.font.italic = False

    b2_items = [
        "Built a responsive commodity price monitoring web app tracking 50+ daily market essentials across city retail and wholesale markets.",
        "Engineered an automated price fluctuation ticker calculating daily percentage surges and price drops with sub-second UI updates.",
        "Structured categorized aggregation queries across 8+ grocery categories, optimizing data retrieval speeds by 25%."
    ]
    for b in b2_items:
        p_b = doc.add_paragraph(style='List Bullet')
        set_spacing(p_b, before=0, after=1.2, line=1.08)
        r_b = p_b.add_run(b)
        r_b.font.name = 'Calibri'
        r_b.font.size = Pt(10.5)  # Exactly 10.5 pt as requested by user
        r_b.font.italic = False
        r_b.font.underline = False
        r_b.font.color.rgb = RGBColor(25, 25, 25)

    p_p2_tech = doc.add_paragraph()
    set_spacing(p_p2_tech, before=0.5, after=3.0, line=1.08)
    r_t2_lbl = p_p2_tech.add_run("Tech Stack: ")
    r_t2_lbl.font.name = 'Calibri'
    r_t2_lbl.font.size = Pt(10)
    r_t2_lbl.font.bold = True
    r_t2_lbl.font.italic = False
    r_t2_val = p_p2_tech.add_run("Next.js, React, Tailwind CSS, HeroUI, daisyUI, Node.js, Express.js, MongoDB, Vercel")
    r_t2_val.font.name = 'Calibri'
    r_t2_val.font.size = Pt(10)
    r_t2_val.font.italic = False

    # ------------------ EDUCATION ------------------
    add_section_heading("EDUCATION")
    
    # AIUB
    p_ed1 = doc.add_paragraph()
    set_spacing(p_ed1, before=1, after=0.5, line=1.08)
    r_ed1_inst = p_ed1.add_run("American International University-Bangladesh (AIUB)")
    r_ed1_inst.font.name = 'Calibri'
    r_ed1_inst.font.size = Pt(10.5)
    r_ed1_inst.font.bold = True
    r_ed1_inst.font.italic = False
    
    p_ed1_sub = doc.add_paragraph()
    set_spacing(p_ed1_sub, before=0, after=2.0, line=1.08)
    r_ed1_deg = p_ed1_sub.add_run("Bachelor of Science in Computer Science & Engineering (B.Sc CSE) | 2023 – 2027 (Ongoing)")
    r_ed1_deg.font.name = 'Calibri'
    r_ed1_deg.font.size = Pt(10)
    r_ed1_deg.font.italic = False
    r_ed1_deg.font.color.rgb = RGBColor(35, 35, 35)

    # Dinajpur Govt City College
    p_ed2 = doc.add_paragraph()
    set_spacing(p_ed2, before=1, after=0.5, line=1.08)
    r_ed2_inst = p_ed2.add_run("Dinajpur Govt. City College")
    r_ed2_inst.font.name = 'Calibri'
    r_ed2_inst.font.size = Pt(10.5)
    r_ed2_inst.font.bold = True
    r_ed2_inst.font.italic = False
    
    p_ed2_sub = doc.add_paragraph()
    set_spacing(p_ed2_sub, before=0, after=2.5, line=1.08)
    r_ed2_deg = p_ed2_sub.add_run("Higher Secondary Certificate (HSC), Science | Passing Year: 2023")
    r_ed2_deg.font.name = 'Calibri'
    r_ed2_deg.font.size = Pt(10)
    r_ed2_deg.font.italic = False
    r_ed2_deg.font.color.rgb = RGBColor(35, 35, 35)

    # ------------------ LANGUAGES ------------------
    add_section_heading("LANGUAGES")
    p_lang = doc.add_paragraph()
    set_spacing(p_lang, before=1, after=0, line=1.08)
    
    r_l1 = p_lang.add_run("English: ")
    r_l1.font.name = 'Calibri'
    r_l1.font.size = Pt(10)
    r_l1.font.bold = True
    r_l1.font.italic = False
    r_l1_val = p_lang.add_run("Professional Working Proficiency  |  ")
    r_l1_val.font.name = 'Calibri'
    r_l1_val.font.size = Pt(10)
    r_l1_val.font.italic = False
    
    r_l2 = p_lang.add_run("Bengali: ")
    r_l2.font.name = 'Calibri'
    r_l2.font.size = Pt(10)
    r_l2.font.bold = True
    r_l2_val = p_lang.add_run("Native Proficiency")
    r_l2_val.font.name = 'Calibri'
    r_l2_val.font.size = Pt(10)
    r_l2_val.font.italic = False

    # Save to both project root and public folder
    output_path = r"F:\Documents\Project\my-portfolio\Raunak_Biswas_Resume.docx"
    doc.save(output_path)
    print(f"Generated: {output_path}")

    public_path = r"F:\Documents\Project\my-portfolio\public\Raunak_Biswas_Resume.docx"
    doc.save(public_path)
    print(f"Generated: {public_path}")

if __name__ == "__main__":
    create_resume()
