package com.codoacodo.service;

import com.codoacodo.entity.UserEntity;
import com.codoacodo.exception.GenericException;
import com.codoacodo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public boolean login(String email, String password) {
        Optional<UserEntity> userDB = userRepository.findByEmailAndPassword(email, password);

        if (userDB.isPresent())
            return true;
        else
            throw new GenericException("Email o contraseña incorrectos");
    }

    public void register(UserEntity user)  {
        boolean emailDB = userRepository.existsByEmail(user.getEmail());

        if (emailDB)
            throw new GenericException("El email ya está registrado");

        if (isMinor(user.getBirthdate()))
            throw new GenericException("El usuario es menor de 18 años.");

        userRepository.save(user);
    }

    private boolean isMinor(LocalDate birthDate) {
        LocalDate today = LocalDate.now();
        LocalDate thresholdDate = today.minusYears(18);
        return birthDate.isAfter(thresholdDate);
    }

}
