import fitz
import sys, os

sys.stdout.reconfigure(encoding='utf-8')

brochure_dir = r"C:\Users\rauna\OneDrive\Desktop\insurrica\Insurrica\frontend\src\data\brochures"
out_dir = r"C:\Users\rauna\OneDrive\Desktop\insurrica\Insurrica\tmp"

new_pdfs = [
    "Star Flexi_One Pager_Preferred_09-05-25_R9.pdf",
    "Star Flexi_One Pager_Secure_09-05-25_R9.pdf",
]

for pdf_name in new_pdfs:
    path = os.path.join(brochure_dir, pdf_name)
    out_name = pdf_name.replace(".pdf", ".txt").replace(" ", "_")
    out_path = os.path.join(out_dir, out_name)
    doc = fitz.open(path)
    full_text = ""
    for page in doc:
        full_text += page.get_text()
    doc.close()
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(full_text)
    print(f"{pdf_name}: {len(full_text)} chars -> {out_name}")
