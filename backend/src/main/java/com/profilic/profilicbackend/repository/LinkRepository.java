package com.profilic.profilicbackend.repository;

import com.profilic.profilicbackend.model.Link;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository public class LinkRepository {
    @Autowired JdbcTemplate jdbcTemplate;

    public List<Link> getAll() {
        return jdbcTemplate.query("SELECT * FROM links", (resultSet, i) -> {
            Link link = new Link();
            link.setUid(resultSet.getString("uid"));
            link.setLinkId(resultSet.getString("linkId"));
            link.setName(resultSet.getString("name"));
            link.setUrl(resultSet.getString("url"));
            link.setFontColor(resultSet.getString("fontColor"));
            link.setColor(resultSet.getString("color"));
            return link;
        });
    }

    public List<Link> getForUser(String uid) {
        return jdbcTemplate.query("SELECT * FROM links WHERE uid = ?", (resultSet, i) -> {
            Link link = new Link();
            link.setUid(resultSet.getString("uid"));
            link.setLinkId(resultSet.getString("linkId"));
            link.setName(resultSet.getString("name"));
            link.setUrl(resultSet.getString("url"));
            link.setFontColor(resultSet.getString("fontColor"));
            link.setColor(resultSet.getString("color"));
            return link;
        }, uid);
    }

    public void create(Link link) {
        jdbcTemplate.update("INSERT INTO links (uid, linkId, name, url, fontColor, color) " + "values (?, ?, ?, ?, ?," +
                            " ?" + ")", link.getUid(), link.getLinkId(), link.getName(), link.getUrl(),
                link.getFontColor(), link.getColor());
    }

    public Link get(String linkId) {
        return jdbcTemplate.queryForObject("SELECT * FROM links where linkId = ?", (resultSet, i) -> {
            Link link = new Link();
            link.setUid(resultSet.getString("uid"));
            link.setLinkId(resultSet.getString("linkId"));
            link.setName(resultSet.getString("name"));
            link.setUrl(resultSet.getString("url"));
            link.setFontColor(resultSet.getString("fontColor"));
            link.setColor(resultSet.getString("color"));
            return link;
        }, linkId);
    }

    public void update(String linkId, Link link) {
        jdbcTemplate.update("UPDATE links SET name = ?, url = ?, fontColor = ?, color = ?" + " WHERE linkId = ?",
                link.getName(), link.getUrl(), link.getFontColor(), link.getColor(), linkId);
    }

    public void delete(String linkId) {
        jdbcTemplate.update("DELETE FROM links WHERE linkId = ?", linkId);
    }
}
