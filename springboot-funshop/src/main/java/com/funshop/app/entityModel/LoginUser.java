package com.funshop.app.entityModel;


import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="FS_LOGIN_INFORMATION")
public class LoginUser {
	
	@Id
	@Column(name="CUST_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long custId;
	
	@Column(name="PHONE_NUMBER")
	private Long phoneNumber;
	
	@Column(name="EMAIL_ID")
	private String emailId;
	
	@Column(name="LOGIN_PASSWORD")
	private String password;
	
	@Column(name="LOGIN_OLD_PASSWORD")
	private String oldPassword;
	
	@Column(name="DT_UPDATE")
	private LocalDateTime datUpdate;
	
	public Long getCustId() {
		return custId;
	}

	public void setCustId(Long custId) {
		this.custId = custId;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public LocalDateTime getDatUpdate() {
		return datUpdate;
	}

	public void setDatUpdate(LocalDateTime datUpdate) {
		this.datUpdate = datUpdate;
	}
	
	
}
