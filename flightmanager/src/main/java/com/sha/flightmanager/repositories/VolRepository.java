package com.sha.flightmanager.repositories;

import com.sha.flightmanager.model.Vol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VolRepository extends JpaRepository<Vol, String> {
    @Query("SELECT v FROM Vol v WHERE v.pilote.numPilote = :numpilote AND v.avion.numAvion = :numavion ORDER BY v.heureDep")
    List<Vol> findAllByNumpiloteAndNumavionOrderByDate(@Param("numpilote") Integer numpilote, @Param("numavion") Integer numavion);

}
