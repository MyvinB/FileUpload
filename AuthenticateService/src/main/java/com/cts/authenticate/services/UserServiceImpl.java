/**
 * 
 */
package com.cts.authenticate.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.authenticate.exception.UserAlreadyExistsException;
import com.cts.authenticate.exception.UserNotFoundException;
import com.cts.authenticate.model.User;
import com.cts.authenticate.repository.UserRepository;

/**
 * @author ubuntu
 *
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	/**
	 * @param userRepo
	 */
	public UserServiceImpl(UserRepository userRepo) {
		super();
		this.userRepo = userRepo;
	}

	@Override
	public boolean saveUser(User user) throws UserAlreadyExistsException {
		Optional<User> existingUser = userRepo.findById(user.getUserId());
		if (existingUser.isPresent()) {
			throw new UserAlreadyExistsException("User with id already exists");
		}
		userRepo.save(user);
		return true;
	}

	@Override
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {
		User user = userRepo.findByUserIdAndPassword(userId, password);
		if (null == user) {
			throw new UserNotFoundException("UserId and Password mismatch");
		}
		return user;
	}

}
