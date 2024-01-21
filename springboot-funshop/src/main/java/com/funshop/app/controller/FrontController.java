package com.funshop.app.controller;

import java.security.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.funshop.app.entityModel.LoginUser;
import com.funshop.app.service.LoginService;

@RestController
@RequestMapping("/api/v1")
public class FrontController {
	
	@Autowired
	LoginService loginService;
	
	@GetMapping("/loginUsers")
	@CrossOrigin
	public List<LoginUser> getUsers(){
		return loginService.getAllUsers();
	}
	
	@PostMapping("/loginUsers")
	@CrossOrigin
	public LoginUser createUsers(@RequestBody LoginUser loginUser) {
		return loginService.createLoginUser(loginUser);
		
	}
	
	@GetMapping("/loginUsers/custid/{custId}")
	@CrossOrigin
	public ResponseEntity<LoginUser> getUserByCustId(@PathVariable Long custId){
		
		LoginUser loginUser = loginService.getUserByCustId(custId);
		return ResponseEntity.ok(loginUser);
	}
	
	@PutMapping("/loginUsers/custid/{custId}")
	@CrossOrigin
	public ResponseEntity<LoginUser> updateUserByCustId(@PathVariable Long custId, @RequestBody LoginUser loginUserDetails){
		
		LoginUser loginUser = loginService.getUserByCustId(custId);
		
		
		loginUser.setPhoneNumber(loginUserDetails.getPhoneNumber());
		loginUser.setEmailId(loginUserDetails.getEmailId());
		loginUser.setOldPassword(loginUserDetails.getOldPassword());
		loginUser.setPassword(loginUserDetails.getPassword());
		
		loginUser.setDatUpdate(LocalDateTime.now());
		
		LoginUser updatedUser = loginService.updateLoginUserByCustId(loginUser);
		
		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("/loginUsers/custid/{custId}")
	@CrossOrigin
	public ResponseEntity<Map<String, Boolean>> deleteLoginUserByCustId(@PathVariable Long custId){
		
		LoginUser loginUser = loginService.getUserByCustId(custId);
		
		loginService.deleteUserByCustId(loginUser);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
}
