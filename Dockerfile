FROM centos:centos7
EXPOSE 8080

RUN yum install -y epel-release     
RUN yum install -y nodejs

RUN mkdir /usr/bigzam
WORKDIR /usr/bigzam
COPY . /usr/bigzam

RUN npm install
RUN node pugToHtml.js
RUN node_modules/.bin/gulp sass
RUN mv node_modules/bootstrap/dist/js/bootstrap.min.js app/scripts
CMD ["node", "server.js"]