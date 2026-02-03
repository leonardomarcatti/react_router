FROM node:25.5.0-alpine3.23

WORKDIR /app

RUN npm install -g pnpm

# Copia apenas os arquivos de dependência (cache eficiente)
COPY package.json pnpm-lock.yaml* ./

# Instala dependências
RUN pnpm install

# Copia o restante do projeto
COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "--port=3000"]
