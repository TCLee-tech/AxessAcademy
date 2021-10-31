package com.scb.ngos.controller;

import java.util.List;
import java.util.Optional;

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


import com.scb.ngos.entity.ApplicationList;
import com.scb.ngos.repository.ApplicationListRepository;
import com.scb.ngos.service.ApplicationListService;


@RestController
@CrossOrigin
public class ApplicationListController {

	@Autowired
	ApplicationListService applicationListService;
	

	//Creating an object of ApplicationList Service
	//	ApplicationListService applicationListService=new ApplicationListService();
	
	//API to return the list of applicationList
//		@RequestMapping(value="/applicationLists")
//		public List<ApplicationList> getListOfApplicationLists(){
//			
//			return applicationListService.getListApplicationLists();
//		}
		
		@PostMapping(value="/createapplicationlist")
		public ApplicationList createApplicationList(@RequestBody ApplicationList applicationlist) {
			System.out.println(applicationlist.getAddressFile());
			return applicationListService.createApplicationList(applicationlist);
			 //"Application List successfully added";
}

	
	@GetMapping(value="/allapplications")
	public List<ApplicationList> getAllapplications(){
		return applicationListService.getListFromDb();
	}
	
	@RequestMapping("/application/{appid}")
	public Optional<ApplicationList> applicationList(@PathVariable Integer appid) {
		return applicationListService.findById(appid);
	}
	
    @CrossOrigin
    @DeleteMapping("/{appid}")
    public void deleteById(@PathVariable Integer appid) {applicationListService.deleteById(appid);}
    
    
    @PutMapping("/updateapplicationlist/{appid}")
    public ResponseEntity<ApplicationList> updateApplicationList(@PathVariable (value ="appid")Integer appid, @RequestBody ApplicationList newApplicationList) {
    	Optional<ApplicationList> applicationList = applicationListService.findById(appid);
    	
    	if(applicationList.isPresent()) {
    		ApplicationList application = applicationList.get();
    		application.setAddressFile(newApplicationList.getAddressFile());
    		application.setCreateDate(newApplicationList.getCreateDate());
    		application.setCustomerId(newApplicationList.getCustomerId());
    		application.setFullName(newApplicationList.getFullName());
    		application.setIdFile(newApplicationList.getIdFile());
    		application.setIncomeFile(newApplicationList.getIncomeFile());
    		application.setProduct(newApplicationList.getProduct());
    		application.setProfile(newApplicationList.getProfile());
    		application.setSalesName(newApplicationList.getSalesName());
    		application.setStatus(newApplicationList.getStatus());
    		
    	   application = applicationListService.save(application);
    		return ResponseEntity.ok().body(application);
    	}else {
    		return ResponseEntity.notFound().build();
    	}
    	
    	
    }
		 
}
//
