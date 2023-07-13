package com.example.demo.controller;

import com.example.demo.form.Form;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;

//@RequestParam("")
@Controller
public class RequestParamController {
    @GetMapping("show")
    public String showView(){
        return "entry";
    }

    @PostMapping("confirm")
    public String confirmView(Form form) {

        return "confirm2";
    }
}
