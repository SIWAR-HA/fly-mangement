
FROM openjdk:17-jdk-slim


LABEL maintainer="Siwar"


WORKDIR /app


COPY target/flightmanager-0.0.1-SNAPSHOT.jar flightmanager.jar


EXPOSE 8081


ENTRYPOINT ["java", "-jar", "flightmanager.jar"]