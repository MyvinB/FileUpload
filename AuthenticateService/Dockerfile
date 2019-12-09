FROM java:8-jre
WORKDIR usr/src
ENV MYSQL_DATABASE=db_fse_movie
ENV MYSQL_USER=fsemovieuser
ENV MYSQL_PASSWORD=FsePassword
ENV MYSQL_CI_URL=jdbc:mysql://localhost:3306/db_fse_movie
ADD ./target/AuthenticateService-0.0.1-SNAPSHOT.jar /usr/src/AuthenticateService-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "AuthenticateService-0.0.1-SNAPSHOT.jar"]