FROM centos:centos7
EXPOSE 8080

RUN yum install -y epel-release     
RUN yum install -y nodejs

RUN mkdir /opt/insights-ocp-ui
WORKDIR /opt/insights-ocp-ui
COPY . /opt/insights-ocp-ui

RUN npm install
RUN node pugToHtml.js
RUN node_modules/.bin/gulp sass
RUN mv node_modules/jquery/dist/jquery.min.js app/scripts
RUN npm prune --production

CMD ["node", "server.js"]
