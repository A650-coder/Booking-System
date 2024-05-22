package com.service;

import org.springframework.stereotype.Repository;

@Repository
public interface LoginService {
	public boolean loginValidation(String username,String password);
}
