FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache git curl

RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]