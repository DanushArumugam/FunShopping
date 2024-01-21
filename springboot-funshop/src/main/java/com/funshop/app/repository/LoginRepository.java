package com.funshop.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.funshop.app.entityModel.LoginUser;

@Repository
public interface LoginRepository extends JpaRepository<LoginUser,Long>{


}
