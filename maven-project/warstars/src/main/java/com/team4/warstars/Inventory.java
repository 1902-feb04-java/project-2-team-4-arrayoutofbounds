package com.team4.warstars;

import java.util.Arrays;

import java.util.List;

import javax.persistence.ElementCollection;
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
	private String location_id;
	private String personal[];
	private String vehicles[];
	private String weapons[];
	private int ammunition;

	public Inventory() {
		super();
	}

	public Inventory(long id, String location_id, String[] personal, String[] vehicles, String[] weapons,
			int ammunition) {
		super();
		this.id = id;
		this.location_id = location_id;
		this.personal = personal;
		this.vehicles = vehicles;
		this.weapons = weapons;
		this.ammunition = ammunition;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLocation_id() {
		return location_id;
	}

	public void setLocation_id(String location_id) {
		this.location_id = location_id;
	}

	public String[] getPersonal() {
		return personal;
	}

	public void setPersonal(String[] personal) {
		this.personal = personal;
	}

	public String[] getVehicles() {
		return vehicles;
	}

	public void setVehicles(String[] vehicles) {
		this.vehicles = vehicles;
	}

	public String[] getWeapons() {
		return weapons;
	}

	public void setWeapons(String[] weapons) {
		this.weapons = weapons;
	}

	public int getAmmunition() {
		return ammunition;
	}

	public void setAmmunition(int ammunition) {
		this.ammunition = ammunition;
	}
}