package com.eladoscuro.proyecto1;

import com.eladoscuro.proyecto1.models.users;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class usersService {
    public final ArrayList<users> lista = new ArrayList<>();

    public usersService() {
        lista.add(new users(1, "Edwin", "5523659875", "edwin@gmail.com", "edwin2389"));
        lista.add(new users(2, "Luis", "5523656571", "luis@gmail.com", "luis5987"));
        lista.add(new users(3, "Bernardo", "5523652146", "bernardo@gmail.com", "bernardo2114"));
        lista.add(new users(4, "Arturo", "5523657489", "arturo@gmail.com", "arturo4563"));

    }//Constructor

    public List<users> getAllUsers() {
        return lista;
    }//getUsers

    public users getUser(Long userId) {
        if (userId <= lista.size()) {
            return lista.get((userId.intValue() - 1));
        }//if
        return new users(0, "not found", "not found", "not found", "");
    }//getUser()

    public boolean deleteUser(Long userId) {
        boolean res = false;
        if (userId <= lista.size()) {
            lista.remove((userId.intValue() - 1));
            res = true;
        }//if >=size
        return res;
    }//deleteUser

    public void updateUser(Long userId, String originalPassword, String newPassword) {
        if (userId <= lista.size()) {
            users user = lista.get((userId.intValue() - 1));
            if (user.getPassword().equals(originalPassword)) {
                user.setPassword(newPassword);
            }//if original
        }//if userId
    }//updateUser

    public void addUser(users user) {
        lista.add(user);
    }//addUser

        public boolean loginUser(Long userId, String password, String email) {
        boolean userStatus = false;
        for (int i = 0; i < lista.size() ; i++) {
            users useri = lista.get(i);
            if (((email.equals(useri.getEmail())) && password.equals(useri.getPassword()))) {
                  userStatus = true;
            }//if
        }//for
        return userStatus;
    }//loginUser()


}//class userService
