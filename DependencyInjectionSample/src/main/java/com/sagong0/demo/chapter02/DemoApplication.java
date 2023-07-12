package com.sagong0.demo.chapter02;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // 스프링부트를 실행하자 마자 이 어노테이션이 붙은 곳을 실행해 !
public class DemoApplication {
    public static void main(String[] args) {
        // 자기자신을 실행하는 메소드
        SpringApplication.run(DemoApplication.class, args)
                .getBean(DemoApplication.class).execute();
    }

    // new 생성자에 해당하는 것
    @Autowired // 스프링 프레임워크에서 인스턴스를 생성한다. (자동실행 어노테이션 component어노테이션 찾음 )
    Greet greet;

    private void execute() {
        greet.greeting();
    }
}
