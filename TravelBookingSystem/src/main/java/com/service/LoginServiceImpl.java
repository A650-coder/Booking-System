package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.SignUp;
import com.repo.SignUpRepo;


@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private SignUpRepo urepo;

    public boolean loginValidation(String username, String password) {
        // Use UserRepository to find the user by email
        List<SignUp> users = urepo.findByUsername(username);
        if (users != null && users.size() != 0 && users.get(0).getPassword().equals(password)) {
        	System.out.println("Valid login");
            return true;
        }
        else {
        System.out.println("Invalid");
		return false;
        }
    }
}


