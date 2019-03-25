package com.team4.warstars;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "locations")
public class Locations 
{
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long locationId;
	private String name;
	
	public Locations()
	{}
	
	public Locations(long id, long locationId, String name) {
		super();
		this.id = id;
		this.locationId = locationId;
		this.name = name;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getLocationId() {
		return locationId;
	}
	public void setLocationId(long locationId) {
		this.locationId = locationId;
	}
}
