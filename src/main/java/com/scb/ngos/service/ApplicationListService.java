package com.scb.ngos.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.ngos.entity.ApplicationList;
import com.scb.ngos.repository.ApplicationListRepository;



@Service
public class ApplicationListService {
	
	
	
	

	@Autowired
	ApplicationListRepository applicationListRepository;
	
	// Function to return a list of applicationLists
//		public List<ApplicationList> getListApplicationLists() {
//			// Creating and initializing application list objects with values
//			ApplicationList applicationlist1 = new ApplicationList(1,null,null,null,"2021-01-02T16:00:00.000+00:00","123456789000","Alex Seow",null,null,null,null,null,null,"DigiSmart","Existing","Samiya","Pending");
//			ApplicationList applicationlist2 = new ApplicationList(2,null,null,null,"2021-02-14T16:00:00.000+00:00","123456789999","Andrew Lee",null,null,null,null,null,null,"Platinum","New","Eric","Submission Incomplete");
//			ApplicationList applicationlist3 = new ApplicationList(3,null,null,null,"2021-03-31T16:00:00.000+00:00","987654321000","Christine Teo",null,null,null,null,null,null,"Gold","Existing","Ankit","Pending");
//
//			// ArrayList Declaration and Initialization of type LoginProfile
//			List<ApplicationList> listOfApplicationLists = new ArrayList<ApplicationList>();
//			listOfApplicationLists.add(applicationlist1);
//			listOfApplicationLists.add(applicationlist2);
//			listOfApplicationLists.add(applicationlist3);
//
//			return listOfApplicationLists;
//		}
		
		//Method to add a applicationList  to DB
		public ApplicationList createApplicationList(ApplicationList applicationList)
		{
			return applicationListRepository.save(applicationList);
			
			// "Successfully added";
		}
		
		//To Fetch all applications from the Database using the findAll()
	public List<ApplicationList> getListFromDb(){
		
		List<ApplicationList> allApplicationLists=new ArrayList<ApplicationList>();
		allApplicationLists.addAll((Collection<? extends ApplicationList>) applicationListRepository.findAll());
		
		return allApplicationLists;
	}
	
	
	 public void deleteById(Integer appid) {
		 applicationListRepository.deleteById(appid);
	    }
	

	public Optional<ApplicationList> findById(Integer appid) {
		return applicationListRepository.findById(appid);
		
	}
	
	
	public ApplicationList save(ApplicationList applicationList) {
		return applicationListRepository.save(applicationList);
	}
}



	
	
	

	
	
	
	
	




	

