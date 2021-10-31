package com.scb.ngos.entity;


import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.hibernate.annotations.Type;

import com.scb.ngos.controller.adto.ApplicationListDTO;

@Entity
public class ApplicationList {
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Integer appId;
	@Type(type = "org.hibernate.type.BinaryType")
	byte[] addressFile;
	Date createDate;
	String customerId;
	String fullName;
	@Type(type = "org.hibernate.type.BinaryType")
	byte[] idFile;
	@Type(type = "org.hibernate.type.BinaryType")
	byte[] incomeFile;
	String product;
	String profile;
	String salesName;
	String status;
	
	
	
	public ApplicationList() {
		
	}



	public Integer getAppId() {
		return appId;
	}



	public void setAppId(Integer appId) {
		this.appId = appId;
	}



	public byte[] getAddressFile() {
		return addressFile;
	}



	public void setAddressFile(byte[] addressFile) {
		this.addressFile = addressFile;
	}



	public Date getCreateDate() {
		return createDate;
	}



	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}



	public String getCustomerId() {
		return customerId;
	}



	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}



	public String getFullName() {
		return fullName;
	}



	public void setFullName(String fullName) {
		this.fullName = fullName;
	}



	public byte[] getIdFile() {
		return idFile;
	}



	public void setIdFile(byte[] idFile) {
		this.idFile = idFile;
	}



	public byte[] getIncomeFile() {
		return incomeFile;
	}



	public void setIncomeFile(byte[] incomeFile) {
		this.incomeFile = incomeFile;
	}



	public String getProduct() {
		return product;
	}



	public void setProduct(String product) {
		this.product = product;
	}



	public String getProfile() {
		return profile;
	}



	public void setProfile(String profile) {
		this.profile = profile;
	}



	public String getSalesName() {
		return salesName;
	}



	public void setSalesName(String salesName) {
		this.salesName = salesName;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public ApplicationList(Integer appId, byte[] addressFile, Date createDate, String customerId, String fullName,
			byte[] idFile, byte[] incomeFile, String product, String profile, String salesName, String status) {
		super();
		this.appId = appId;
		this.addressFile = addressFile;
		this.createDate = createDate;
		this.customerId = customerId;
		this.fullName = fullName;
		this.idFile = idFile;
		this.incomeFile = incomeFile;
		this.product = product;
		this.profile = profile;
		this.salesName = salesName;
		this.status = status;
	}



	@Override
	public String toString() {
		return "ApplicationList [appId=" + appId + ", addressFile=" + Arrays.toString(addressFile) + ", createDate="
				+ createDate + ", customerId=" + customerId + ", fullName=" + fullName + ", idFile="
				+ Arrays.toString(idFile) + ", incomeFile=" + Arrays.toString(incomeFile) + ", product=" + product
				+ ", profile=" + profile + ", salesName=" + salesName + ", status=" + status + "]";
	}

//	public ApplicationList (ApplicationListDTO applicationListDTO) {
//			this.addressFile=applicationListDTO.getAddressFile();
//			this.createDate=applicationListDTO.getCreateDate();
//			this.customerId=applicationListDTO.getCustomerId();
//			this.fullName=applicationListDTO.getFullName();
//			this.idFile=applicationListDTO.getIdFile();
//			this.incomeFile=applicationListDTO.getIncomeFile();
//			this.product=applicationListDTO.getProduct();
//			this.profile=applicationListDTO.getProfile();
//			this.salesName=applicationListDTO.getSalesName();
//			this.status=applicationListDTO.getStatus();
//	}

	
}

	
	
	
	
	
	

	