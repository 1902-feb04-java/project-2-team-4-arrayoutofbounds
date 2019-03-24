package com.team4.warstars;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="officers")
public class Officer 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private long officerId;
	private String rank;
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	//these are all references to other (or this) tables
	private int superiorOfficerId;
	private int locationId;
//	private int armyDivisionId;

	public Officer()
	{}
	
	public Officer(String firstName) {
		super();
		this.firstName = firstName;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getRank() {
		return rank;
	}

	public void setRank(String rank) {
		this.rank = rank;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getSuperiorOfficerId() {
		return superiorOfficerId;
	}

	public void setSuperiorOfficerId(int superiorOfficerId) {
		this.superiorOfficerId = superiorOfficerId;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}


//	public int getArmyDivisionId() {
//		return armyDivisionId;
//	}
//
//	public void setArmyDivisionId(int armyDivisionId) {
//		this.armyDivisionId = armyDivisionId;
//	}

	public String getUserName() {
		return username;
	}

	public void setUserName(String userName) {
		this.username = userName;
	}

	public String getPassWord() {
		return password;
	}

	public void setPassWord(String passWord) {
		this.password = passWord;
	}

	public long getOfficerId() {
		return officerId;
	}

	public void setOfficerId(long officerId) {
		this.officerId = officerId;
	}
	
}
