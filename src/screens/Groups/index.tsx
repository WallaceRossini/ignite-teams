import { useState } from 'react'
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { Header } from '@components/Header'
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket'])

  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  );
}
