package com.team4.warstars;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class WarstarsApplication {

	public static void main(String[] args) 
	{
		SpringApplication.run(WarstarsApplication.class, args);
	}
}
