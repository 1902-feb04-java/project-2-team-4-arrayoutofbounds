package com.team4.warstars;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inventories")
public class Inventory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long inventoryid;
	private int locationId;
	//private String personnel[];
	@Column(length=2048)
	private String items;

	public Inventory() {
		super();
	}

	public long getId() {
		return id;
	}

	public long getinventoryid() {
		return inventoryid;
	}

	public void setinventoryid(long inventoryid) {
		this.inventoryid = inventoryid;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getLocationId() {
		return locationId;
	}

	public void setLocationId(int locationId) {
		this.locationId = locationId;
	}

	public String getItems() {
		return items;
	}

	public void setItems(String items) {
		this.items = items;
	}

	public Inventory(long id, int locationId, String items) {
		super();
		this.id = id;
		this.locationId = locationId;
		this.items = items;
	}
	
}