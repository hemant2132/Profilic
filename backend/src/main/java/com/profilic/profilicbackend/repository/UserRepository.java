package com.profilic.profilicbackend.repository;

import com.profilic.profilicbackend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

import static java.sql.Types.VARCHAR;

@Repository public class UserRepository {
    @Autowired JdbcTemplate jdbcTemplate;

    public List<User> getAll(User query) {
        StringBuilder sqlQuery = new StringBuilder("SELECT * FROM users WHERE name LIKE ");
        ArrayList<String> arrList = new ArrayList<>();
        ArrayList<Integer> typesList = new ArrayList<>();

        if (query.getName() != null) {
            sqlQuery.append("'%").append(query.getName()).append("%'");
        } else {
            sqlQuery.append("'%'");
        }

        if (query.getOrg() != null) {
            sqlQuery.append(" AND org = ?");
            arrList.add(query.getOrg());
            typesList.add(VARCHAR);
        }

        if (query.getLocation() != null) {
            sqlQuery.append(" AND location = ?");
            arrList.add(query.getLocation());
            typesList.add(VARCHAR);
        }

        if (query.getRole() != null) {
            sqlQuery.append(" AND role = ?");
            arrList.add(query.getRole());
            typesList.add(VARCHAR);
        }

        Object[] obj = arrList.toArray();
        int[] types = typesList.stream().mapToInt(i -> i).toArray();

        return jdbcTemplate.query(sqlQuery.toString(), obj, types, (resultSet, i) -> {
            User user = new User();
            user.setUid(resultSet.getString("uid"));
            user.setUserName(resultSet.getString("userName"));
            user.setName(resultSet.getString("name"));
            user.setOrg(resultSet.getString("org"));
            user.setLocation(resultSet.getString("location"));
            user.setBio(resultSet.getString("bio"));
            user.setRole(resultSet.getString("role"));
            user.setProfilePicUrl(resultSet.getString("profilePicUrl"));
            user.setBackgroundImgUrl(resultSet.getString("backgroundImgUrl"));
            return user;
        });
    }

    public void create(User user) {
        jdbcTemplate.update("INSERT INTO users (uid, userName, name, org, location, bio, role, profilePicUrl, " +
                            "backgroundImgUrl) values (?, ?, ?, ?, ?," + " ?, ?, ?, ?)", user.getUid(),
                user.getUserName(), user.getName(), user.getOrg(), user.getLocation(), user.getBio(), user.getRole(),
                user.getProfilePicUrl(), user.getBackgroundImgUrl());
    }

    public User get(String uid) {
        return jdbcTemplate.queryForObject("SELECT * FROM users where uid = ?", (resultSet, i) -> {
            User user = new User();
            user.setUid(resultSet.getString("uid"));
            user.setUserName(resultSet.getString("userName"));
            user.setName(resultSet.getString("name"));
            user.setOrg(resultSet.getString("org"));
            user.setLocation(resultSet.getString("location"));
            user.setBio(resultSet.getString("bio"));
            user.setRole(resultSet.getString("role"));
            user.setProfilePicUrl(resultSet.getString("profilePicUrl"));
            user.setBackgroundImgUrl(resultSet.getString("backgroundImgUrl"));
            return user;
        }, uid);
    }

    public void update(String uid, User user) {
        jdbcTemplate.update("UPDATE users SET name = ?, org = ?, location = ?, bio = ?, role = ?, profilePicUrl = ?, " +
                            "backgroundImgUrl = ? " + " WHERE uid = ?", user.getName(), user.getOrg(),
                user.getLocation(), user.getBio(), user.getRole(), user.getProfilePicUrl(), user.getBackgroundImgUrl(),
                uid);
    }

    public void delete(String uid) {
        jdbcTemplate.update("DELETE FROM users WHERE uid = ?", uid);
    }
}
