package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.enums.TipoServico;
import br.unijorge.avaliaamado.model.Servico;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
   
    Servico findByTipo(TipoServico tipo);//Buscando por tipo

    Servico findByLocal(String local);//Buscando por local

    List<Servico> findAllByOrderByNotaDesc(); // Listando por nota decrescente
}
