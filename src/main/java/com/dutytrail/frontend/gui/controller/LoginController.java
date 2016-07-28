package com.dutytrail.frontend.gui.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class LoginController {

    @RequestMapping(value = "/login")
    public ModelAndView index(final HttpServletRequest request, final HttpServletResponse response) throws IOException {
        return new ModelAndView("login");
    }
}
