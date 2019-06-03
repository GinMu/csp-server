FROM registry.cn-qingdao.aliyuncs.com/jccoin/jc_sails:latest

WORKDIR /app
COPY ./*  /app
RUN  npm install 
CMD ["sails", "lift"]
