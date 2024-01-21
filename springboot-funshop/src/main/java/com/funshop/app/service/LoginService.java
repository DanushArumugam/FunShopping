package com.funshop.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.funshop.app.entityModel.LoginUser;
import com.funshop.app.exception.ResourceNotFoundException;
import com.funshop.app.repository.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;

	public  List<LoginUser> getAllUsers() {
		return loginRepository.findAll();
	}

	public LoginUser createLoginUser(LoginUser loginUser) {
		return loginRepository.save(loginUser);
	}

	public LoginUser getUserByCustId(Long custId) {
		return loginRepository
				.findById(custId).orElseThrow(() -> new ResourceNotFoundException("This custId is not exist - "+custId));
	}

	public LoginUser updateLoginUserByCustId(LoginUser loginUser) {
		return loginRepository.save(loginUser);
				
	}

	public void deleteUserByCustId(LoginUser loginUser) {
		loginRepository.delete(loginUser);
	}

}
