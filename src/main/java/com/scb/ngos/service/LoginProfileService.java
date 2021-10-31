package com.scb.ngos.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.ngos.entity.LoginProfile;
import com.scb.ngos.repository.LoginProfileRepository;

@Service
public class LoginProfileService {
	
	@Autowired
	LoginProfileRepository loginProfileRepo;
	

	// Function to return a list of loginprofiles
	public List<LoginProfile> getListLoginProfiles() {
		// Creating and initializing login profile objects with values
		LoginProfile loginprofile1 = new LoginProfile("1639291", "admin", "Remy Lim", "weemeng.lim@sc.com");
		LoginProfile loginprofile2 = new LoginProfile("1639182", "admin", "Christine Teo", "HuiPengChristine.Teo@sc.com");
		LoginProfile loginprofile3 = new LoginProfile("1639290", "admin", "Alex Seow", "ChengSen.Seow@sc.com");

		// ArrayList Declaration and Initialization of type LoginProfile
		List<LoginProfile> listOfLoginProfiles = new ArrayList<LoginProfile>();
		listOfLoginProfiles.add(loginprofile1);
		listOfLoginProfiles.add(loginprofile2);
		listOfLoginProfiles.add(loginprofile3);

		return listOfLoginProfiles;

	}
	
	//Method to add a loginprofile  to DB
	public LoginProfile createLoginProfile(LoginProfile loginProfile)
	{
		return loginProfileRepo.save(loginProfile);
		
		// "Successfully added";
	}
	
	//To Fetch all profiles from the Database using the findAll()
	public List<LoginProfile> getListFromDb(){
		
		List<LoginProfile> allLoginProfiles=new ArrayList<LoginProfile>();
		allLoginProfiles.addAll((Collection<? extends LoginProfile>) loginProfileRepo.findAll());
		return allLoginProfiles;
	}




	
}
