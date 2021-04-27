package com.profilic.profilicbackend.controller;

import com.profilic.profilicbackend.model.User;
import com.profilic.profilicbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/api/users") public class UserController {
    @Autowired UserRepository userRepo;

    // Get all users
    @RequestMapping(value = "", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAllUsers(@RequestBody User user) {
        return userRepo.getAll(user);
    }

    // Create a new user
    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createUser(@RequestBody User user) {
        userRepo.create(user);
    }

    // Get a user
    @RequestMapping(value = "/{uid}", method = RequestMethod.GET) public User getUser(@PathVariable("uid") String uid) {
        return userRepo.get(uid);
    }

    // Update a user
    @RequestMapping(value = "/{uid}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateUser(@PathVariable("uid") String uid, @RequestBody User user) {
        userRepo.update(uid, user);
    }

    // Delete a user
    @RequestMapping(value = "/{uid}", method = RequestMethod.DELETE) public void deleteUser(
            @PathVariable("uid") String uid) {
        userRepo.delete(uid);
    }
}
