package com.scb.ngos.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scb.ngos.entity.LoginProfile;
import com.scb.ngos.service.LoginProfileService;

@RestController
@CrossOrigin
public class LoginProfileController {

	@Autowired
	LoginProfileService loginProfileService;
	
	//Creating an object of LoginProfile Service
//	LoginProfileService loginProfileService=new LoginProfileService();
	
	
	//API to return the list of loginprofiles
	@RequestMapping(value="/loginprofiles")
	public List<LoginProfile> getListOfLoginProfiles(){
		
		return loginProfileService.getListLoginProfiles();
	}
	
	@PostMapping(value="/createloginprofile")
	public LoginProfile createLoginProfile(@RequestBody LoginProfile loginprofile) {
		return loginProfileService.createLoginProfile(loginprofile);
		 //"Login Profile successfully added";
		
	}
	
	@GetMapping(value="/allprofiles")
	public List<LoginProfile> getAllprofiles(){
		return loginProfileService.getListFromDb();
	}
	
		
	@CrossOrigin	
	@GetMapping(value="/authenticate/{psid}/{password}")
	public String getAllprofile(@PathVariable String psid,@PathVariable String password){
		List<LoginProfile> profile= loginProfileService.getListFromDb();
//		System.out.println(profile);
		
		
		for(int i=0 ; i< profile.size();i++) {
//			System.out.println(profile.get(i));
			LoginProfile prof = profile.get(i);
//			System.out.println(prof.getPsid()+ "," + prof.getPassword());
			String PSID =prof.getPsid();
			String PWD =prof.getPassword();
//			System.out.println(PSID);
			if(PSID.contentEquals(psid)) {
//				System.out.println("Match");
				if(PWD.contentEquals(password)) {
					String NAME =prof.getName();
					String EMAIL =prof.getEmail();
					return NAME +","+EMAIL;
				}
			}
			
		}
		
		return "Invalid PSID/Password";
//		return loginProfileService.getListFromDb();
		
	
	}
	
	
	
//	public String response() {
//		return "Invalid PSID/Password";
//	    }


		 
}
//
