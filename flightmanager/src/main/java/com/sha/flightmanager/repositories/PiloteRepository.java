package com.sha.flightmanager.repositories;


import com.sha.flightmanager.model.Pilote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PiloteRepository extends JpaRepository<Pilote, Integer> {
}
