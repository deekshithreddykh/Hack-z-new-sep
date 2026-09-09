export interface SquadMember {
  name: string;
  usn: string;
  year: string;
}

export interface TeamRegistration {
  id?: string;
  regId: string;
  teamName: string;
  domain: string;
  idea?: string;
  leaderName: string;
  leaderUsn: string;
  leaderYear: string;
  leaderSection: string;
  leaderPhone: string;
  leaderEmail: string;
  membersCount: number;
  members: SquadMember[];
  status: 'CONFIRMED' | 'PENDING' | 'CHECKED_IN';
  createdAt: string;
}

export interface TrackItem {
  id: string;
  num: string;
  title: string;
  icon?: string;
  emoji: string;
  tagline?: string;
  description: string;
  tags?: string[];
  bullets?: string[];
  gradient?: string;
  accentColor?: string;
}
