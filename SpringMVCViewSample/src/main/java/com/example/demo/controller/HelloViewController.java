package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // requestMapping 을 사용하게 해주는 ..
@RequestMapping(value = {"hello","hellospring"}) // hello,hellospring 입력시 아래 클래스 실행
public class HelloViewController {
    @GetMapping("view")
//    @GetMapping(value = {"view", "viewspring"})
    // hello/view 실행시 아래 method 실행
    public String helloView(){
   //   hello.html 로 이동 ( = hello 반환 )
        return "hello";
    }

    @GetMapping("view2")
    public String morningView(){
        return "morning";
    }
}