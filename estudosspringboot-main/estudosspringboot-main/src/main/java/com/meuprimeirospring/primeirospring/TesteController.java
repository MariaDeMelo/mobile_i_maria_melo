package com.meuprimeirospring.primeirospring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TesteController {

	@RequestMapping("/teste/")
	public String teste() {
		return "teste";
	}
}
