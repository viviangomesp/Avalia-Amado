package br.unijorge.avaliaamado.repository;

import br.unijorge.avaliaamado.model.Usuario;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

    boolean existsByEmail(String email);//Verificando se o email já existe no banco de dados

    // Método para realizar login, buscando usuário por email e senha
    Optional<Usuario> findByEmailAndSenha(String email, String senha);

}
