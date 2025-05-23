package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {
    
    Evento findByNome(String nome);//Buscando por nome

    List<Evento> findByLocal(String local);//Listando por local

    List<Evento> findByData(String data);//Listando por data

}
