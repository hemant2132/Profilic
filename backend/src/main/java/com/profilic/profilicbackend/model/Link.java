package com.profilic.profilicbackend.model;

public class Link {
    String uid;
    String linkId;
    String name;
    String url;
    String fontColor;
    String color;

    public Link() {
    }

    public Link(String uid, String linkId, String name, String url, String fontColor, String color) {
        this.uid = uid;
        this.linkId = linkId;
        this.name = name;
        this.url = url;
        this.fontColor = fontColor;
        this.color = color;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getLinkId() {
        return linkId;
    }

    public void setLinkId(String linkId) {
        this.linkId = linkId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFontColor() {
        return fontColor;
    }

    public void setFontColor(String fontColor) {
        this.fontColor = fontColor;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

