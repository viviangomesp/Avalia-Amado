package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
   
    Servico findByTipo(String tipo);//Buscando por tipo

    List<Servico> findByLocal(String local);//Listando por local

}
