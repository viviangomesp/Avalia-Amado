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

    private boolean isValidarEmail(String email) { // Valida o email por expressões
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }

    public Usuario login(String email, String senha) {// Realizar login do usuário
        return usuarioRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("Email ou senha inválidos"));
    }

    public Usuario editarUsuario(long id, Usuario usuario) {
        Usuario usuarioExistente = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        usuarioExistente.setNome(usuario.getNome());
        usuarioExistente.setEmail(usuario.getEmail());
        usuarioExistente.setSenha(usuario.getSenha());

        return usuarioRepository.save(usuarioExistente);
    }

    public void deleteUsuario(long id) {
        if (!usuarioRepository.existsById(id)) {
            throw new RuntimeException("Usuário não encontrado");
        }
        usuarioRepository.deleteById(id);
    }

    public Usuario getById(long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    public List<Usuario> getAllUsuarios(Long usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        String role = usuario.getRole();

        if (role == null)
            throw new RuntimeException("Usuário não possui função atribuída. Acesso Negado.");

        if (!role.equalsIgnoreCase("ADMIN")) { // Verifica se o usuário é administrador
            throw new RuntimeException("Apenas administradores podem listar os usuários do sistema. Acesso Negado.");
        }
        return usuarioRepository.findAll();
    }

}
