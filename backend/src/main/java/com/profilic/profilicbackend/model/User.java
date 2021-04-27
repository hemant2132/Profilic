package com.profilic.profilicbackend.model;

public class User {
    String uid;
    String userName;
    String name;
    String org;
    String location;
    String bio;
    String role;
    String profilePicUrl;
    String backgroundImgUrl;

    public User() {
    }

    public User(String uid, String userName, String name, String org, String location, String bio, String role,
            String profilePicUrl, String backgroundImgUrl) {
        this.uid = uid;
        this.userName = userName;
        this.name = name;
        this.org = org;
        this.location = location;
        this.bio = bio;
        this.role = role;
        this.profilePicUrl = profilePicUrl;
        this.backgroundImgUrl = backgroundImgUrl;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getOrg() {
        return org;
    }

    public void setOrg(String org) {
        this.org = org;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getProfilePicUrl() {
        return profilePicUrl;
    }

    public void setProfilePicUrl(String profilePicUrl) {
        this.profilePicUrl = profilePicUrl;
    }

    public String getBackgroundImgUrl() {
        return backgroundImgUrl;
    }

    public void setBackgroundImgUrl(String backgroundImgUrl) {
        this.backgroundImgUrl = backgroundImgUrl;
    }
}
