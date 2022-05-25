FROM alpine:3.14

# instala o programa thttpd
# apk é o instalador de pacote do alpine, 
# semelhante ao apt-get install
RUN apk add thttpd

# Cria um novo usuário simples que não tem permissões de root
RUN adduser -D static
USER static

# Cria-se uma nova pasta dentro da imagem
WORKDIR /home/static

# Copia arquivo HTML para dentro da imagem e setando permissão ao mesmo tempo
# apesar de setar o usuário para não ser root, quando o docker usa o comando COPY
# ele seta o arquivo de destino como root novamente, então tem que trocar a pemissão
COPY --chown=static:static index.html index.html

# Executa o programa thttpd para entregar arquivos HTML na pasta "/home/static"
CMD [ "thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/home/static", "-u", "static", "-l", "-"]