package br.unijorge.avaliaamado.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.unijorge.avaliaamado.repository.UsuarioRepository;
import br.unijorge.avaliaamado.model.Usuario;


@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void criarUsuario(Usuario usuario) {
         if (usuarioRepository.existsByEmail(usuario.getEmail())) { // Verifica se o email já está cadastrado
             throw new RuntimeException("Email já cadastrado");
        }
        
         if (!isValidarEmail(usuario.getEmail())) {
             throw new RuntimeException("Email inválido");
        }

        usuarioRepository.save(usuario);
    }
  
    private boolean isValidarEmail(String email){ // Valida o email por expressões regulares
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public Usuario login(String email, String senha){// Realizar login do usuário
        return usuarioRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("Email ou senha inválidos"));
    }

    public void atualizarUsuario(Long id, Usuario usuario) {
        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        
        usuarioExistente.setNome(usuario.getNome());
        usuarioExistente.setEmail(usuario.getEmail());
        usuarioExistente.setSenha(usuario.getSenha());
        
        usuarioRepository.save(usuarioExistente);
    }

    public void deleteUsuario(long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuário não encontrado");
        }
        usuarioRepository.deleteById(id);
    }

    public Usuario getUsuarioById(long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    
}
