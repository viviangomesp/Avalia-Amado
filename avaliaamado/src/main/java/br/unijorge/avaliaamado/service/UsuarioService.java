package br.unijorge.avaliaamado.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.unijorge.avaliaamado.repository.UsuarioRepository;
import br.unijorge.avaliaamado.model.Usuario;


@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void criarUsuario(Usuario usuario) {
        
        if (usuarioRepository.findByEmail(usuario.getEmail()) != null) { // Verifica se o email já está cadastrado no banco de dados
            throw new RuntimeException("Email já cadastrado");
        }
        
        if (isValidarEmail(usuario.getEmail())) { // Verifica se o email é válido
            throw new RuntimeException("Email inválido");
        }

        usuarioRepository.save(usuario);
    }
  
    private boolean isValidarEmail(String email){ // Método para validar o email por expressões regulares
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public Usuario login(String email, String senha){// Método para fazer login do usuário
        return usuarioRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("Email ou senha inválidos"));
    }

    public Usuario buscarUsuarioPorId(long id) { // Método para buscar o usuário por ID
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

}
