package com.team4.warstars;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "items")
public class Item 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long itemId;
	private String category;
	private String classification;
	private String model;
	private int cost;
	private boolean isRestricted;
	
	public Item()
	{}
	
	public long getItemId() {
		return itemId;
	}

	public void setItemId() {
		this.itemId = id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getClassification() {
		return classification;
	}
	public void setClassification(String classification) {
		this.classification = classification;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}

	public boolean isRestricted() {
		return isRestricted;
	}

	public void setRestricted(boolean isRestricted) {
		this.isRestricted = isRestricted;
	}

	public void setItemId(long itemId) {
		this.itemId = itemId;
	}
}
