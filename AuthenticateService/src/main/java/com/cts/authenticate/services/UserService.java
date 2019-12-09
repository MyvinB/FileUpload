/**
 * 
 */
package com.cts.authenticate.services;

import com.cts.authenticate.exception.UserAlreadyExistsException;
import com.cts.authenticate.exception.UserNotFoundException;
import com.cts.authenticate.model.User;

/**
 * @author ubuntu
 *
 */
public interface UserService {

	boolean saveUser(User user) throws UserAlreadyExistsException;

	User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;
}
