import fitz
import os

pasta = "dados"

for arquivo in os.listdir(pasta):
    
    if arquivo.endswith(".pdf"):
        
        caminho = os.path.join(pasta, arquivo)
        
        print("\n============================")
        print("Lendo arquivo:", arquivo)
        print("============================\n")
        
        doc = fitz.open(caminho)
        
        for pagina in doc:
            texto = pagina.get_text()
            print(texto)